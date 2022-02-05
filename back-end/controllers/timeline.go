package controller

import (
	dbconnect "ReDevGC/Project/back-end/database"
	"ReDevGC/Project/back-end/model"
	"fmt"
	"net/http"

	"github.com/labstack/echo"
)

func PostCreate() echo.HandlerFunc {
	return func(c echo.Context) error {
		db := dbconnect.Connect()
		defer db.Close()

		result := new(model.Timeline)
		if err := c.Bind(result); err != nil {
			return err
		}

		db.Create(&result)
		return c.JSON(http.StatusOK, result)
	}
}

func PostShow() echo.HandlerFunc {
	return func(c echo.Context) error {
		db := dbconnect.Connect()
		defer db.Close()
		timeline := model.Timeline{}
		timeline_id := c.Param("id")
		result := db.Table("timelines").Find(&timeline, "id = ?", timeline_id)
		if result.RecordNotFound() {
			fmt.Println("レコードが見つかりません")
		}
		return c.JSON(http.StatusOK, timeline)
	}
}

func PostShowAll() echo.HandlerFunc {
	return func(c echo.Context) error {
		db := dbconnect.Connect()
		defer db.Close()
		timeline := []model.Timeline{}
		result := db.Table("timelines").Find(&timeline)
		if result.RecordNotFound() {
			fmt.Println("レコードが見つかりません")
		}
		return c.JSON(http.StatusOK, timeline)
	}
}

func PostUpdate() echo.HandlerFunc {
	return func(c echo.Context) error {
		db := dbconnect.Connect()
		defer db.Close()

		newPost := new(model.Timeline)
		if err := c.Bind(newPost); err != nil {
			return err
		}
		timeline_id := c.Param("id")
		if timeline_id != "" {
			post := model.Timeline{}
			db.First(&post, "id = ?", timeline_id).Update(newPost)
			fmt.Println(post)
			return c.JSON(http.StatusOK, post)
		} else {
			return c.JSON(http.StatusNotFound, nil)
		}

	}
}

func PostDelete() echo.HandlerFunc {
	return func(c echo.Context) error {
		db := dbconnect.Connect()
		defer db.Close()
		newDelete := new(model.Timeline)
		timeline_id := c.Param("id")
		db.Delete(&newDelete, "id = ?", timeline_id)
		return c.JSON(http.StatusOK, newDelete)
	}
}
