package main

import (
	controller "ReDevGC/Project/back-end/controllers"
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func newRouter() *echo.Echo {
	e := echo.New()
	e.Use(middleware.CORS())

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.POST("timeline/post", controller.PostCreate())
	e.GET("timeline/post/:id", controller.PostShow())
	e.PUT("timeline/post/:id", controller.PostUpdate())
	e.DELETE("timeline/post/:id", controller.PostDelete())
	return e
}
