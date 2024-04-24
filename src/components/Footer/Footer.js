import css from './Footer.module.css'

export  function Footer() {
    return (
        <footer className={css.footer}>
            <div className='container'>
                <span className={css.licens}>License: <strong> Our rights are seriously protected!!!</strong></span>
            </div>
        </footer>
    )
}