import { translationLanguages } from '../config'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTranslate, getActiveLanguage, setActiveLanguage } from 'react-localize-redux'

class GeneralSettings extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <fieldset>
          {translationLanguages.map((language, index) => {
              return (
                <button key={index} onClick={() => this.handleLanguageClick(language)}>{language.toUpperCase()}</button>
              );
            }
          )}
        </fieldset>
      </div>
    );
  }

  handleLanguageClick(language) {
    this.props.dispatch(setActiveLanguage(language));
    localStorage.setItem('language', language);
  }
}

GeneralSettings.propTypes = {
  user: PropTypes.object,
  settings: PropTypes.object
};

function mapStateToProps(state) {
  return {
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
  };
}

export default connect(mapStateToProps)(GeneralSettings);
