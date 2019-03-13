import { Component, Method, State, Prop } from "@stencil/core";
import { Element } from "@stencil/core";

@Component({
  tag: "app-date-picker",
  styleUrl: "app-date-picker.css"
})
export class AppDatePicker {
  @Element() el: any;

  @Method()
  dismiss(data?: any) {
    (this.el.closest("ion-popover") as any).dismiss(data);
  }

  @Prop() months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  @Prop() weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  @Prop() date: Date;
  @State() monthDisplayed: Date;

  componentWillLoad() {
    this.monthDisplayed = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      this.date.getDate()
    );
  }

  @Method()
  getMonthMatrix(date: Date) {
    const days = this.daysInMonth(date);
    date.setDate(1);
    const firstWeekLength = 7 - date.getDay();
    const fullWeeks = Math.floor((days - firstWeekLength) / 7);
    const lastWeekLength = (days - firstWeekLength) % 7;
    const firstWeek = firstWeekLength > 0 ? 1 : 0;
    const lastWeek = lastWeekLength > 0 ? 1 : 0;
    const weeks = firstWeek + fullWeeks + lastWeek;

    let dayPointer = 1 - date.getDay();
    let month = [];
    let week = [];
    while (dayPointer <= weeks * 7) {
      if (dayPointer > 0 && dayPointer <= days) {
        week.push(dayPointer);
      } else {
        week.push(0);
      }
      if (week.length == 7) {
        month.push(week);
        week = [];
      }
      dayPointer++;
    }
    return month;
  }

  @Method()
  isSelectedDate(date: Date) {
    return (
      this.date.getFullYear() === date.getFullYear() &&
      this.date.getMonth() === date.getMonth() &&
      this.date.getDate() === date.getDate()
    );
  }

  @Method()
  selectDate(date: Date) {
    this.dismiss({ date });
  }

  @Method()
  previousMonth() {
    this.monthDisplayed = new Date(
      this.monthDisplayed.getFullYear(),
      this.monthDisplayed.getMonth() - 1
    );
  }

  @Method()
  nextMonth() {
    this.monthDisplayed = new Date(
      this.monthDisplayed.getFullYear(),
      this.monthDisplayed.getMonth() + 1
    );
  }

  @Method()
  daysInMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  render() {
    return [
      <ion-header>
        <ion-item lines="none" color="tertiary" class="month">
          <ion-icon
            name="arrow-dropleft"
            color="light"
            slot="start"
            onClick={() => this.previousMonth()}
          />
          <ion-label text-center>
            {this.months[this.monthDisplayed.getMonth()]}{" "}
            {this.monthDisplayed.getFullYear()}
          </ion-label>
          <ion-icon
            name="arrow-dropright"
            color="light"
            slot="end"
            onClick={() => this.nextMonth()}
          />
        </ion-item>
      </ion-header>,
      <ion-content>
        <ion-grid>
          <ion-row>
            {this.weekDays.map(day => (
              <ion-col text-center>{day}</ion-col>
            ))}
          </ion-row>
          {this.getMonthMatrix(this.monthDisplayed).map(week => (
            <ion-row>
              {week.map((day: number) => {
                if (day) {
                  return (
                    <ion-col
                      text-center
                      class={
                        "clickable " +
                        (this.isSelectedDate(
                          new Date(
                            this.monthDisplayed.getFullYear(),
                            this.monthDisplayed.getMonth(),
                            day
                          )
                        )
                          ? "selected"
                          : "")
                      }
                      onClick={() =>
                        this.selectDate(
                          new Date(
                            this.monthDisplayed.getFullYear(),
                            this.monthDisplayed.getMonth(),
                            day
                          )
                        )
                      }
                    >
                      {day}
                    </ion-col>
                  );
                } else {
                  return <ion-col />;
                }
              })}
            </ion-row>
          ))}
        </ion-grid>
      </ion-content>
    ];
  }
}
