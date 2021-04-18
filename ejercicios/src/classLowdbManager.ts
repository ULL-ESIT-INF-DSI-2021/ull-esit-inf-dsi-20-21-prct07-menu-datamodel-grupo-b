
//==============================================================================
export abstract class lowdbManager {
  protected readonly low99 = require('lowdb');
  protected readonly FileSync99 = require('lowdb/adapters/FileSync');
  protected adapter99: any;
  protected db99: any;
  protected mainEntryName: string = '';
  protected fileName: string = '';

  constructor(jsonFileName: string) {
    this.fileName = jsonFileName;
    this.adapter99 = new this.FileSync99(jsonFileName);
    this.db99 = this.low99(this.adapter99);
  }

  abstract addDefaults(mainEntryName: string):void;
}