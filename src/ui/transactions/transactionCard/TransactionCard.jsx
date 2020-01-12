import React from "react";
import { Card, CardHeader, CardText, CardColumns, CardTitle } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ToggleButtons from "./toggleButtons/ToggleButtons";
import { MdEdit, MdDelete } from "react-icons/md";
import "./TransactionsCard.css";

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

export default function TransactionCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <ToggleButtons />
      <CardColumns>
        <Card className={classes.card}>
          <CardHeader tag="h3">Ally</CardHeader>
          <CardTitle>Deposit</CardTitle>
          <CardText>01/01/2020</CardText>
          <CardText>interest earned</CardText>
          <CardText>$100</CardText>

          <CardActions disableSpacing>
            <button
              className="edit-btn btn-icon"
              aria-label="edit button"
              // onClick={() => handleEdit()}
            >
              <MdEdit />
            </button>
            <button
              className="clear-btn btn-icon"
              aria-label="delete button"
              // onClick={() => handleDelete()}
            >
              <MdDelete />
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
              <Typography paragraph>Year-end interest earned</Typography>
              <Typography paragraph>
                Ally yields 20% annual interest.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card className={classes.card}>
          <CardHeader tag="h3">BOA</CardHeader>
          <CardTitle>Withdrawal</CardTitle>
          <CardText>01/02/2020</CardText>
          <CardText>groceries</CardText>
          <CardText>$69</CardText>

          <CardActions disableSpacing>
            <button
              className="edit-btn btn-icon"
              aria-label="edit button"
              // onClick={() => handleEdit(id)}
            >
              <MdEdit />
            </button>
            <button
              className="clear-btn btn-icon"
              aria-label="delete button"
              // onClick={() => handleDelete(id)}
            >
              <MdDelete />
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
              <Typography paragraph>
                Jennie bought household goods & food
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card className={classes.card}>
          <CardHeader tag="h3">Cash</CardHeader>
          <CardTitle>Deposit</CardTitle>
          <CardText>01/03/2020</CardText>
          <CardText>Janice</CardText>
          <CardText>$350</CardText>

          <CardActions disableSpacing>
            <button
              className="edit-btn btn-icon"
              aria-label="edit button"
              // onClick={() => handleEdit(id)}
            >
              <MdEdit />
            </button>
            <button
              className="clear-btn btn-icon"
              aria-label="delete button"
              // onClick={() => handleDelete(id)}
            >
              <MdDelete />
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
              <Typography paragraph>Car insurance & rent</Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card className={classes.card}>
          <CardHeader tag="h3">RCU</CardHeader>
          <CardTitle>Deposit</CardTitle>
          <CardText>01/04/2020</CardText>
          <CardText>Payroll Direct Deposit</CardText>
          <CardText>$1200</CardText>

          <CardActions disableSpacing>
            <button
              className="edit-btn btn-icon"
              aria-label="edit button"
              // onClick={() => handleEdit(id)}
            >
              <MdEdit />
            </button>
            <button
              className="clear-btn btn-icon"
              aria-label="delete button"
              // onClick={() => handleDelete(id)}
            >
              <MdDelete />
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
              <Typography paragraph>n/a</Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card className={classes.card}>
          <CardHeader tag="h3">VCU</CardHeader>
          <CardTitle>Deposit</CardTitle>
          <CardText>01/05/2020</CardText>
          <CardText>Jennie</CardText>
          <CardText>$800</CardText>

          <CardActions disableSpacing>
            <button
              className="edit-btn btn-icon"
              aria-label="edit button"
              // onClick={() => handleEdit(id)}
            >
              <MdEdit />
            </button>
            <button
              className="clear-btn btn-icon"
              aria-label="delete button"
              // onClick={() => handleDelete(id)}
            >
              <MdDelete />
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
              <Typography paragraph>surgery</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </CardColumns>
    </>
  );
}
