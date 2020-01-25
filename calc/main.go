package main

import (
    "fmt"
    "error"
    "strings"
)

const (
    accepted = "0123456789+-/x=."
)

func calculate(args string) (sum string, err error) {
    // Split of every char
    argsSlice := strings.Split(args, "")

    for _, a := range argsSlice {
        
    }
}

func main() {
    fmt.Println("calculating")
}
