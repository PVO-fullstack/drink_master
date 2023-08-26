import React from 'react';
import css from './SubscribeForm.module.scss'

const SubscribeForm = () => {
    const onSubm = (e) => {
        e.preventDefault()
        const { value } = e.target[0];
    }
    return (
        <form className={css.SubscribeForm} onSubmit={onSubm}>
            <p className={css.SubscribeFormText}>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
            <input
                type="text"
                placeholder="Enter the email"
                className={css.SubscribeFormInput} />
            <button className={css.SubscribeFormSubmit} type='submit'>Subscribe</button>
        </form>
    )
}

export default SubscribeForm