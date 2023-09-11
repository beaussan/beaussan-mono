import React, { useState } from 'react';
import { Button, ButtonProps, ButtonVariant } from '../../components/Button';
import { Modal, ModalIcons } from '../../components/Modal';

type Variants = 'confirm' | 'delete';

interface ButtonWithConfirmProps
  extends Omit<
    ButtonProps,
    'children' | 'variant' | 'isFull' | 'className' | 'onClick'
  > {
  buttonLabel: string;
  actionLabel: string;
  variant: Variants;
  onClick: () => any | Promise<any | void> | void;
}

interface Names {
  title: string;
  body: string;
  action: string;
  icon: ModalIcons;
  buttonVariant: ButtonVariant;
}

const getNames = (actionLabel: string, varient: Variants): Names => {
  if (varient === 'confirm') {
    return {
      title: `Please confirm this action`,
      body: `Are you sure to do ${actionLabel}?`,
      action: 'Confirm',
      icon: 'info',
      buttonVariant: 'primary',
    };
  }
  return {
    title: `Are you sure to delete it?`,
    body: `You are about to delete ${actionLabel}?`,
    action: 'Delete',
    icon: 'warning',
    buttonVariant: 'warn',
  };
};

export const ButtonWithConfirm: React.FC<ButtonWithConfirmProps> = ({
  onClick,
  buttonLabel,
  actionLabel,
  variant,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const onCloseModal = () => setModalOpen(false);
  const { body, action, icon, title, buttonVariant } = getNames(
    actionLabel,
    variant
  );

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>{buttonLabel}</Button>

      <Modal isOpen={isModalOpen} onClose={onCloseModal}>
        <Modal.Body icon={icon} onClose={onCloseModal}>
          <div>
            <Modal.Title>{title}</Modal.Title>
            <div>{body}</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Modal.ButtonWrapper>
            <Button variant="ghost" type="button" onClick={onCloseModal}>
              Cancel
            </Button>
          </Modal.ButtonWrapper>
          <Modal.ButtonWrapper>
            <Button
              variant={buttonVariant}
              onClick={async () => {
                onCloseModal();
                await onClick();
              }}
            >
              {action}
            </Button>
          </Modal.ButtonWrapper>
        </Modal.Footer>
      </Modal>
    </>
  );
};
