// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  personapi: 'http://www.deillanes.com/backend/person/person',
  studentapi: 'http://www.deillanes.com/backend/student/student',
  careerapi: 'http://www.deillanes.com/backend/career/career',
  procedureapi: 'http://www.deillanes.com/backend/procedure-consolidator/procedure'
  //procedureapi: 'http://localhost:8093/procedure'

  //personapi: 'http://localhost:8082/v2/person',
  //studentapi: 'http://localhost:8085/v1/student',
  //careerapi: 'http://localhost:8087/v1/career',
  //procedureapi: 'http://localhost:8092/v1/procedure'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
