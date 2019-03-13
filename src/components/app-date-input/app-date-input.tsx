import { Component, Prop, Listen, State, Method } from "@stencil/core";

@Component({
  tag: "app-date-input",
  styleUrl: "app-date-input.css"
})
export class AppDateInput {
  @Prop({ connect: "ion-popover-controller" })
  popoverCtrl: HTMLIonPopoverControllerElement;

  @State() date: Date = new Date(Date.now());

  @Listen("ionFocus")
  async handleElementFocused(event: any) {
    if (event.target.id === "input-date") {
      let popover = await this.popoverCtrl.create({
        component: "app-date-picker",
        componentProps: {
          date: this.date
        },
        event: event,
        translucent: false,
        showBackdrop: false,
        mode: "ios"
      });

      popover.onWillDismiss().then(promise => {
        if (promise.role !== "backdrop") {
          console.log(promise);
          console.log(promise.data.date);
          this.date = promise.data.date;
        }
      });
      await popover.present();
    }
  }

  @Method()
  printDate() {
    return this.date
      ? this.date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        })
      : "No date selected";
  }

  render() {
    return (
      <ion-content>
        <ion-grid class="full-height dark" no-padding>
          <ion-row justify-content-center class="mid-height dark">
            <ion-col align-self-center align-items-center>
              <ion-item color="dark" lines="none">
                <ion-label text-center id="select-date-label">
                  Pick a date
                </ion-label>
              </ion-item>
              <ion-item color="dark" id="input-item" lines="none">
                <ion-input
                  id="input-date"
                  text-center
                  readonly
                  color="secondary"
                  value={this.printDate()}
                />
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    );
  }
}
