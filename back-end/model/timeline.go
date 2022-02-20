package model

import "time"

type Timeline struct {
	Id         int        `gorm:"primary_key" json:"id"`
	Title      string     `json:"title"`
	Post       string     `json:"post"`
	Created_at time.Time  `json:"created_at"`
	Updated_at time.Time  `json:"updated_at"`
	Deleted_at *time.Time `json:"deleted_at"`
}
