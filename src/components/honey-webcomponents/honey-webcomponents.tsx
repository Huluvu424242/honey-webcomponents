import {Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, State, Watch} from "@stencil/core";
import {Sprachausgabe} from "../../libs/sprachausgabe"
import {Logger} from "../../libs/logger";
import {Fileloader} from "../../libs/fileloader";
import {SpeakerOptions} from "./speaker-options";


@Component({
  tag: "honey-webcomponents",
  styleUrl: "honey-webcomponents.css",
  assetsDirs: ['assets'],
  shadow: true
})
export class HoneyWebcomponents {



  public render() {
    return (
      <Host>

      </Host>
    );
  }
}
