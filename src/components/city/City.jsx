import React, { useEffect } from "react";
import styles from './City.module.sass'

import { Translate, I18n } from 'react-redux-i18n';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {createFilterOptions} from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import useAxiosRequest from "../../helpers/useAxiosRequest";
import CloseIcon from "@material-ui/icons/CloseRounded";
import IconButton from "@material-ui/core/IconButton";

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.name,
});

const City = ({ cityOpen, setCityOpen, currentCity, setCity, citiesList, setCitiesList }) => {
    const [value, setValue] = React.useState(currentCity);

    const [cities] = useAxiosRequest(`https://api.hh.ru/areas/5`);

    useEffect(() => {
        if (cities.responseData) {
            let optionsArr = [];

            cities.responseData.areas.forEach((item) => {
                if (item.areas.length !== 0) {
                    item.areas.forEach((innerItem) => {
                        optionsArr.push(innerItem);
                    })
                } else optionsArr.push(item);
            })

            optionsArr.sort((a, b) => (a.name > b.name) ? 1 : -1)

            setCitiesList(optionsArr)
        }
    }, [cities, setCitiesList])

    const handleSubmit = (event) => {
        handleModalClose();
        event.preventDefault();
    }

    const handleModalClose = () => {
        setCityOpen(false);
        currentCity.id !== value.id && setCity(value);
    };

    return(
        <Modal
            open={cityOpen}
            onClose={handleModalClose}
        >
            <div className={styles.modal}>
                <IconButton className={styles.closeButton} onClick={handleModalClose}>
                    <CloseIcon className={styles.closeIcon}/>
                </IconButton>

                <h2><Translate value="city.choose_city"/></h2>
                <p><Translate value="city.help_message"/></p>

                <form className={styles.modal__form} onSubmit={handleSubmit}>
                    <Autocomplete
                        className={styles.modal__autocomplete}
                        getOptionSelected={(option, value) => option.name === value.name}
                        getOptionLabel={(option) => option.name}
                        groupBy={(option) => option.name[0].toUpperCase()}
                        filterOptions={filterOptions}
                        filterSelectedOptions={true}
                        options={citiesList}
                        value={value}
                        onChange={(event, newValue) => {
                            newValue !== null && setValue(newValue);
                        }}
                        loading={cities.isFetching}
                        loadingText={I18n.t("city.loading")}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label={I18n.t("city.label")}
                                variant="outlined"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {cities.isFetching ? <CircularProgress color="inherit" size={20} /> : null}
                                            {params.InputProps.endAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                            />
                        )}
                    />
                    {cities.error ? <p className={styles.modal__error}><Translate value="city.error_message"/></p> : null}

                    <button className={styles.modal__button}>
                        Принять
                    </button>
                </form>
            </div>
        </Modal>
    )
};

export default City;
