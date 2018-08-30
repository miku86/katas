# Printer Errors

[Read this in the Parent Directory](https://github.com/miku86/katas)

This Repo includes Code Katas I have solved or I am currently solving.

Feel free to look at my Solutions, use them, improve them.

Also feel free to [contact me](#contact)

---

## About this Kata

[Source](https://www.codewars.com/kata/printer-errors)

I solve the Katas step-by-step, you can have a look at the commits.
The final code is optimized for readability in a professional setting, not for "cleverness".

### Instructions:

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be "aaabbbbhaijjjm" meaning that the printer used three times color a, four times color b, one time color h then one time color a and so on.

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. "aaaxbbbbyyhwawiwjjjwwm".

You have to write a function printer_error which, given a string, will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

```
Examples:

s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"
```

---

## License

Distributed under the[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/) license.

---

## Contact

- miku86
- [E - Mail](mailto: hello@miku86.com) -[www](https://miku86.com) -[Github](https://github.com/miku86) -[Twitter](https://twitter.com/miku86com)
