import { useDispatch } from "react-redux";
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { startNewNot } from "../../store/journal";

export const JournalPage = () => {
  
  const dispatch = useDispatch();

  const onClickNewNode = () => {
    dispatch(startNewNot());
  };

  return (
    <JournalLayout>
      {/* <Typography>
        Pariatur irure laborum occaecat amet nulla qui nostrud labore do irure
        irure. Eiusmod tempor esse eiusmod deserunt ex ut laboris magna. Mollit
        commodo cillum labore est id irure ipsum eu adipisicing et et magna.
      </Typography> */}

      <NothingSelectedView />

      {/* <NoteView/> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
        onClick={onClickNewNode}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
