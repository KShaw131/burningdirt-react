import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  })
);

type MyModalProps = {
  title: string;
  caption: string;
  image: string;
  pressedOpen: boolean;
};

export const MyModal = (props: MyModalProps) => {
  const { title, caption, image, pressedOpen } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (pressedOpen && !open) {
    handleOpen();
  }

  return (
    <div>
      <Modal
        aria-labelledby={title}
        aria-describedby={caption}
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2 id="modal-title">{title}</h2>
          <p id="modal-description">{caption}</p>
        </div>
      </Modal>
    </div>
  );
};
