import { i18n, withTranslation } from '../i18n';

const LanguagePicker = () => (
  <section className="language-picker">
    Locale:&nbsp;
    <select onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language}>
      <option value="en">English (en)</option>
      <option value="de">Deutsch (de)</option>
      <option value="ru">Русский (ru)</option>
    </select>
  </section>
);

export default withTranslation('common')(LanguagePicker);
