import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../../../components/IconButton/IconButton';

import styles from './MessageInput.module.scss';
import { useRef } from 'react';

interface Props {
  disabled?: boolean;
  onSendMessage: (message?: string) => void;
}

function MessageInput({ disabled, onSendMessage }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const charLimit = 30000;

  function trimText(value: string) {
    if (textareaRef.current !== null) {
      const limitedLengthText = value.substring(0, charLimit);
      textareaRef.current.value = limitedLengthText.trim();
    }
  }

  function clearTextarea() {
    if (textareaRef.current !== null) {
      textareaRef.current.value = '';
    }
  }

  function onEnterPress(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();

      if (textareaRef.current !== null) {
        trimText(textareaRef.current.value);
        onSendMessage(textareaRef.current.value);
        clearTextarea();
      }
    }
  }

  function handleSendMessage() {
    if (!!textareaRef.current?.value) {
      trimText(textareaRef.current.value);
      onSendMessage(textareaRef.current.value);
      clearTextarea();
    }
  }

  return (
    <div className={styles['message-input']}>
      <textarea
        id='messageInput'
        className={styles['message-input__textarea']}
        rows={4}
        maxLength={charLimit}
        placeholder='Enter your question here'
        onKeyDown={onEnterPress}
        ref={textareaRef}
        disabled={disabled}
      />
      <IconButton
        icon={faPaperPlane}
        onClick={handleSendMessage}
        disabled={disabled}
      />
    </div>
  );
}

export default MessageInput;
