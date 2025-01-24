import { useRef } from 'react';
import Modal from '../../../../components/Modal/Modal';
import { useAppSelector } from '../../../../hooks/storeHooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import styles from './FeedbackModal.module.scss';

interface Props {
  isOpen: boolean;
  isPositive: boolean;
  onClose: () => void;
  onSubmit: (feedbackText?: string) => void;
}

function FeedbackModal({ isOpen, isPositive, onClose, onSubmit }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const loadingSendFeedback: boolean = useAppSelector(
    (state) => state.chat.loadingSendFeedback
  );

  function handleSubmitFeedback() {
    onSubmit(textareaRef.current?.value);
  }

  return (
    <Modal
      actionButtonTitle='Submit'
      isOpen={isOpen}
      isLoading={loadingSendFeedback}
      onClose={onClose}
      onAction={handleSubmitFeedback}
    >
      <div className={styles['feedback-modal__content']}>
        {isPositive ? (
          <label>
            Good response <FontAwesomeIcon icon={faThumbsUp} />
          </label>
        ) : (
          <label>
            Bad response <FontAwesomeIcon icon={faThumbsDown} />
          </label>
        )}
        <textarea
          id='feedback-input'
          placeholder='(Optional) Feel free to add specific feedback details'
          rows={10}
          className={styles['feedback-modal__textarea']}
          ref={textareaRef}
        />
      </div>
    </Modal>
  );
}

export default FeedbackModal;
