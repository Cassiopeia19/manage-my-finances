import React from "react";
import { Card, CardHeader, CardText, CardTitle } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { MdEdit, MdDelete } from "react-icons/md";
import "./TransactionCard.css";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
  
}));

export default function TransactionCard(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { transaction } = props;

 
  return (
    <>
      <Card className={classes.card}>
        <CardHeader tag="h3">{transaction.accountName}</CardHeader>
        <CardTitle>{transaction.type}</CardTitle>
        <CardText>{transaction.transactionDate}</CardText>
        <CardText>{transaction.category}</CardText>
        <CardText>{transaction.amount}</CardText>

        <CardActions disableSpacing>
          <button
            className="edit-btn btn-icon"
            aria-label="edit button"
          //  onClick={() => handleEdit()}
          >
            <MdEdit />
          </button>
          <button
            className="clear-btn btn-icon"
            aria-label="delete button"
            // onClick={() => handleDelete()}
          >
            <MdDelete
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you wish to delete this transaction?"
                  )
                )
                  this.onCancel(transaction);
              }}
            />
          </button>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Notes:</Typography>
            <Typography paragraph>{transaction.notes}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
