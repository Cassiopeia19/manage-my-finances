import Moment from "moment";

export const ACTIONS = {
  SET_BEGINNING_DATE: "SET_BEGINNING_DATE",
  SET_REPORT_TIMEFRAME: "SET_REPORT_TIMEFRAME",
  SET_REPORT_TYPE: "SET_REPORT_TYPE",
  RESET_FORM: "RESET_FORM"
};

export const initialState = {
  beginningDate: null,
  reportTimeframe: null,
  reportType: null,
  formIsDirty: false
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_BEGINNING_DATE: {
     let endDate = null;
     const beginningDate = action.payload
    
    if (state.reportTimeframe === "monthly") {
        endDate = Moment(beginningDate).add(1, "months").format('YYYY-MM-DD');
    } else {
        endDate = Moment(beginningDate).add(1, "years").format('YYYY-MM-DD');
    }
      const updatedState = {
        ...state,
        beginningDate: beginningDate,
        endDate: endDate,
        formIsDirty: true
      };
      return updatedState;
    }

    case ACTIONS.SET_REPORT_TIMEFRAME: {
      const updatedState = {
        ...state,
        reportTimeframe: action.payload,
        formIsDirty: true
      };
      return updatedState;
    }

    case ACTIONS.SET_REPORT_TYPE: {
        let transactionTypeChoice = null;
        const reportType = action.payload
        if (reportType === "deposits") {
        transactionTypeChoice = "deposit";
        } else {
        transactionTypeChoice = "withdrawal";
        }
      const updatedState = {
        ...state,
        reportType: action.payload,
        transactionTypeChoice: transactionTypeChoice,
        formIsDirty: true
      };
      return updatedState;
    }

    case ACTIONS.RESET_FORM: {
      return initialState;
    }

    default: {
      throw Error("Please choose an existing action");
    }
  }
}
