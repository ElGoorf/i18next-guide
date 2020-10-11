import PropTypes from 'prop-types'
import { i18n, Link, withTranslation } from '../i18n'
import { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

const Homepage = ({ t }) => {
    const [number, setNumber] = useState(1);

    return (
        <>
            <main>
                <Header title={t('h1')}/>
                <div>
                    <button
                        type='button'
                        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
                    >
                        {t('change-locale')}
                    </button>

                    <div>
                        <input type="number" onChange={(e) => setNumber(parseInt(e.target.value, 10))} defaultValue={number}/>
                        <p>{t('plurals:keyWithCount', {count: number})}</p>
                    </div>

                    <p>see: <a href="https://jsfiddle.net/sm9wgLze">https://jsfiddle.net/sm9wgLze</a></p>

                    <Link href='/second-page'>
                        <button
                            type='button'
                        >
                            {t('to-second-page')}
                        </button>
                    </Link>
                </div>
            </main>
            <Footer/>
        </>
    );
}

Homepage.getInitialProps = async () => ({
    namespacesRequired: ['common', 'footer', 'plurals'],
})

Homepage.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)
