import s from './Button.module.css';
import classNames from 'classnames';
type Props = {
  title: string
  onClick: (event: any) => void;
  waiting?: boolean
}

function Button({ title, onClick, waiting }: Props) {
  return (
    <div className="center-text button-area">
      <button
        type="button"
        className={classNames(
          s["btn"],
          s["btn-send"],
          { [s["btn-waiting"]]: waiting }
        )}
        onClick={onClick}
        disabled={waiting}
      >
        {title}
      </button>
    </div>
  );
}

export default Button

