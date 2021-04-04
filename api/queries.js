// Load the config
var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];

// Create the postgres pool
const Pool = require('pg').Pool
const pool = new Pool({
  user: config.database.user,
  host: config.database.host,
  database: config.database.db,
  password: config.database.password,
  port: config.database.port,
})
/*
// Account Management
const createUser = (request, response) => {
  
};
const updateUserDetails;
const removeUser;

// Event Management
const createEvent;
const updateEventDetails;

// Feedback Form Management
const getEventForm;
const updateEventForm;

// Users' Created Event Management
const getUserCreatedEvents;
const getEventUsers;
const getAllEventSubmissions;

// Event Membership Management
const addUserToEvent;
const removeUserFromEvent;
const getUsersJoinedEvents;

// Assignment Management
const addSubmissionToEvent;
const getUsersAssignedEvents;

// Feedback Management
const postFeedbackForSubmission;
const getFeedbackForSubmission;

*/

const getUsers = (request, response) => {
    pool.query('SELECT * FROM user_account ORDER BY user_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const addUserAccount = (request, response) => {
  pool.query('SELECT * FROM user_account ORDER BY user_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers
}