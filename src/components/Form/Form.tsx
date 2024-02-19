import { TextInput } from '../Inputs/TextInput/TextInput';
import { SelectInput } from '../Inputs/SelectInput/SelectInput';
import { places } from '../../helpers/variables';
import styles from './Form.module.scss';
import { Textarea } from '../Inputs/Textarea/Textarea';

export const Form = () => {
  return (
    <form className={styles.form}>
      <TextInput
        name='name'
        title='Name'
        id="name"
        placeholder='Please enter your name...'
      />

      <TextInput
        name='surname'
        title='Surname'
        id="surname"
      />

      <SelectInput
        id='job-location'
        title='Job location'
        items={places}
      />

      <Textarea
        name='comment'
        title='Comment'
        id="comment"
      />

      <div>
        <label htmlFor="terms">
          <input type="checkbox" id="terms"/>
          I agree to the terms and conditions
        </label>
      </div>

      <button>Sumbit</button>
    </form>
  )
}