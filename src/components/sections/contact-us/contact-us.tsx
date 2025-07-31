import React from 'react'
import s from './contact-us.module.sass'
import Image from 'next/image'
import Input from '@/components/ui/input/input'
import Button from '@/components/ui/button/button'
import PageHeadline from '@/components/ui/page-headline/page-headline'

const TEXT = {
    headline: 'Contact Us',
    formTexts: {
        nameInput: {name:'name',  label: 'Name', placeholder: 'Enter your name...'},
        emailInput: {name:'email',  label: 'Email address', placeholder: 'Your email address...', type:'email'},
        subjectInput: {name:'subject',  label: 'Subject', placeholder: 'Enter subject...'},
        textarea: {name:'messages',  label: 'Messages', placeholder: 'Enter your messages...'},
        btn: 'Submit'
    }
}

const ContactUs:React.FC = () => {
  return (
    <section className={s.contact}>
        <div className="container">
            <PageHeadline text={TEXT.headline}/>
            <form className={s.form}>
                <div className={s.imgContainer}>
                    <Image src='/images/contacts-img.png' width={400} height={472} alt='decor'/>
                </div>
                <div className={s.fields}>
                    <Input name={TEXT.formTexts.nameInput.name} label={TEXT.formTexts.nameInput.label} placeholder={TEXT.formTexts.nameInput.placeholder}/>
                    <Input name={TEXT.formTexts.emailInput.name} type={TEXT.formTexts.emailInput.type} label={TEXT.formTexts.emailInput.label} placeholder={TEXT.formTexts.emailInput.placeholder}/>
                    <Input name={TEXT.formTexts.subjectInput.name} label={TEXT.formTexts.subjectInput.label} placeholder={TEXT.formTexts.subjectInput.placeholder} className={s.big}/>
                    <Input isTextArea name={TEXT.formTexts.textarea.name} label={TEXT.formTexts.textarea.label} placeholder={TEXT.formTexts.textarea.placeholder} className={s.big}/>
                    <Button title={TEXT.formTexts.btn} className={s.btn}/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactUs