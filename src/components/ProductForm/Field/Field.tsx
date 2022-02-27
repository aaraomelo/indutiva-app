import s from './Field.module.css';
import classNames from 'classnames';
type Props = {
  label: string,
  value: any,
  errorMessages: string[];
  onChange?: (event: any) => void;
  onBlur?: (arg0: any) => any
  id: string,
  type: string,
}

function Field({ id, type, label, value, onChange, errorMessages, onBlur }: Props) {
  return (
    <div className={s["field-container"]}>
      <fieldset className={s["group"]}>
        <label className={classNames(
          s["label"],
          { [s["label-error"]]: errorMessages.length }
        )}
          htmlFor="input"
        >
          {label}
        </label>
        <input
          type={type}
          className={classNames(
            s["control"],
            { [s["error"]]: errorMessages.length }
          )}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span
          className={classNames(
            { [s["hidden"]]: !(errorMessages.length) }
          )}
        >{errorMessages[0]}</span>
      </fieldset>
    </div>
  );
}

export default Field

