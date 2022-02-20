package model

import "time"

type User struct {
	Id          int    `gorm:"primary_key" json:"id"`
	First_name  string `json:"first_name"`
	Family_name string `json:"family_name"`
	Email       string `json:"email"`
	// Timeline    Timeline   `gorm:"foreignKey:id" json:"timeline"`
	Created_at time.Time  `json:"created_at"`
	Updated_at time.Time  `json:"updated_at"`
	Deleted_at *time.Time `json:"deleted_at"`
}
type Timeline struct {
	Id         int        `gorm:"primary_key" json:"id"`
	Title      string     `json:"title"`
	Post       string     `json:"post"`
	User       User       `gorm:"foreignKey:id" json:"user"`
	Created_at time.Time  `json:"created_at"`
	Updated_at time.Time  `json:"updated_at"`
	Deleted_at *time.Time `json:"deleted_at"`
}

type SeachTimeline struct {
	//Timeline
	Id    int    `gorm:"primary_key" json:"id"`
	Title string `json:"title"`
	Post  string `json:"post"`
	//User
	First_name  string `json:"first_name"`
	Family_name string `json:"family_name"`
	Email       string `json:"email"`

	Created_at time.Time  `json:"created_at"`
	Updated_at time.Time  `json:"updated_at"`
	Deleted_at *time.Time `json:"deleted_at"`
}
