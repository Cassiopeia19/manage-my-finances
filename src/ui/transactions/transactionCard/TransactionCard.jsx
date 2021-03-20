import React, { useState,useEffect } from "react";
import useSWR from "swr";
import { Card, CardHeader, CardText, } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { MdEdit, MdDelete } from "react-icons/md";
import  "./TransactionCard.css";
import TransactionDataService from "../../../api/TransactionDataService";
import AuthenticationService from "../../../components/authentication/AuthenticationService";
import moment from 'moment'
import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: '5px',
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

const username = AuthenticationService.getLoggedInUsername();

  TransactionDataService.retrieveTransaction(username, useState.id).then(
    (response) =>
      useState({
        accountName: response.data.accountName,
        transactionDate: response.data.transactionDate,
        transactionType: response.data.transactionType,
        depositCategory: response.data.depositCategory,
        withdrawalCategory: response.data.withdrawalCategory,
        transactionAmount: response.data.transactionAmount,
        notes: response.data.notes,
      })
  );
    

export default function TransactionCard(props) {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { transaction } = props; 
 
  const getTransactions = (url) => fetch(url).then((_) => _.json());

  const { data: transactions } = useSWR(
    `http://localhost:8080/jpa/users/${username}/transactions`,
    getTransactions
  );

  useEffect(() => {
    console.log(transactions);
  }, [transactions]);

   const refreshTransactions = () => {
    window.location.reload();
  }
 
  function handleEdit(id) {
    console.log("handle edit");
    alert("you clicked edit");
  }

  function handleDelete(id) {
   let username = AuthenticationService.getLoggedInUserName();
   TransactionDataService.deleteTransaction(username, transaction.id).then((response) => {
     refreshTransactions()
   });
    console.log("handle delete " + transaction.id);
  }

  return (
    <>
      <Card className={classes.card}>
        <center>
          <CardHeader tag="h3">{transaction.accountName}</CardHeader>
          <CardText>{transaction.transactionType}</CardText>
          <CardText>
            {moment.utc(transaction.transactionDate).format("MMM-DD-YYYY")}
          </CardText>
          <CardText>{transaction.depositCategory}</CardText>
          <CardText>{transaction.withdrawalCategory}</CardText>
          <CardText>{transaction.transactionAmount}</CardText>
        </center>
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
        
