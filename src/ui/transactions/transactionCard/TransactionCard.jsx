import React, { useState,useEffect,useSWR } from "react";
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
import AccountDataService from "../../../api/AccountDataService";
import TransactionDataService from "../../../api/TransactionDataService";
import AuthenticationService from "../../../components/authentication/AuthenticationService";


const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const username = AuthenticationService.getLoggedInUserName();

AccountDataService.retrieveAccount(username, useState.id).then((response) =>
  useState({
    accountName: response.data.accountName,
  })
);


  TransactionDataService.retrieveTransaction(username, useState.id).then(
    (response) =>
      useState({
        transactionDate: response.data.transactionDate,
        transactionType: response.data.transactionType,
        depositCategory: response.data.depositCategory,
        withdrawalCategory: response.data.withdrawalCategory,
        transactionAmount: response.data.transactionAmount,
        notes: response.data.notes,
      })
  );
    

export default function TransactionCard(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

 const { account,transaction } = props;

  const { data: accounts,transactions } = useSWR(
    (url) => fetch(url).then((_) => _.json())
  );
  useEffect(() => {
    console.log(accounts,transactions);
  }, [accounts,transactions]);
 
  function handleEdit(id) {
    console.log("handle edit");
    alert("you clicked edit");
  }

  function handleDelete(id) {
    console.log("handle delete");
  }

  return (
    <>
      <Card className={classes.card}>
        <CardHeader tag="h3">{account.accountName}</CardHeader>
        <CardTitle>{transaction.transactionType}</CardTitle>
        <CardText>{transaction.transactionDate}</CardText>
        <CardText>{transaction.depositCategory}</CardText>
        <CardText>{transaction.withdrawalCategory}</CardText>
        <CardText>{transaction.amount}</CardText>
        <CardActions disableSpacing>
          <button
            className="edit-btn btn-icon text"
            aria-label="edit button"
            onClick={() => {
              handleEdit();
              // on();
            }}
          >
            <MdEdit />
          </button>

          <button
            className="clear-btn btn-icon delete-button"
            aria-label="delete button"
            onClick={(e) => {
              if (
                window.confirm(
                  "Are you sure you wish to delete this transaction?"
                )
              )
                handleDelete(e);
            }}
          >
            <MdDelete />
          </button>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
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
        
