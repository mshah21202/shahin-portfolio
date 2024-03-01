import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import styles from './Contact.module.css';
import { db } from '../../global/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useSnackbar } from 'react-simple-snackbar/dist';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const [openSnackbar, closeSnackbar] = useSnackbar();

    const submitMessage = async (data) => {
        try {
            data['datetime'] = new Date();
            await addDoc(collection(db, 'messages'), data);
            openSnackbar('Message Sent successfully', 3000);

        } catch (e) {
            console.log("Failed to send message: " + e);
            openSnackbar('An error has occured', 3000);
        }
    }

    return (<form id='contact' onSubmit={handleSubmit((data) => submitMessage(data))}>
        <div className={`${styles.contact}`}>
            <div className={`${styles.info}`}>
                <input type='text' placeholder='Name' {...register('name', { required: true })}></input>
                <input type='email' placeholder='E-Mail' {...register('email', { required: true })}></input>
            </div>
            <textarea placeholder='Message' {...register('message', { required: true })}></textarea>
            <div className={`${styles.buttons}`}>
                <Button title='Submit' formType='submit'></Button>
                <Button title='Clear' type='outline' formType='reset'></Button>
            </div>
        </div>
    </form>);
}

export default Contact;