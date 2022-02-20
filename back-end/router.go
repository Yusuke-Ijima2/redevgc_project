package main

import (
	"net/http"
	controller "redevgc_project/back-end/controllers"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func newRouter() *echo.Echo {
	e := echo.New()
	e.Use(middleware.CORS())

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.GET("timeline/user/post", controller.UserCreate())
	e.POST("timeline/post/post", controller.PostCreate())
	e.GET("timeline/post/get/:id", controller.PostShow())
	e.GET("timeline/post/get", controller.PostShowAll())
	e.PUT("timeline/post/put/:id", controller.PostUpdate())
	e.DELETE("timeline/post/delete/:id", controller.PostDelete())
	e.GET("timeline/seach/:timelineValue", controller.SeachTimelines())
	return e
}
