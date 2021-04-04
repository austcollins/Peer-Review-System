/* The user accounts table */
CREATE TABLE user_account(
					user_id SERIAL PRIMARY KEY,
					user_first_name varchar(35) NOT NULL,
					user_last_name varchar(35) NOT NULL,
					user_email varchar(255) NOT NULL,
					user_password varchar NOT NULL);

/* The table that stores the feedback events */
CREATE TABLE feedback_event(
					event_id SERIAL PRIMARY KEY,
					owner_user_id  int REFERENCES user_account(user_id), /* The use that created the event */
					event_title varchar(100) NOT NULL,
					date_created timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP); /* The timestamp of when the event was created */

/* Many-to-many, stores which users have joined which feedback events */
CREATE TABLE user_joined_events(
								user_id int REFERENCES user_account(user_id),
								feedback_event_id int REFERENCES feedback_event(event_id));


CREATE TYPE feedback_item_type as enum('Standard', 'Radial', 'Range'); /* The type of feedback items which the front end recognised */
CREATE TABLE feedback_form_item (
						feedback_form_item_id SERIAL PRIMARY KEY,
						feedback_event_id int REFERENCES feedback_event(event_id) NOT NULL,
						title varchar(200) NOT NULL, /* The title of that feedback from item */
						feedback_item_type feedback_item_type NOT NULL,
						message_seen boolean NOT NULL,
						message_content varchar(255) NOT NULL);