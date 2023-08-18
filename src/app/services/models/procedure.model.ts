export class IProcedure{
  id?: number | undefined;
  procedureConfigId?: number | undefined;
  phaseId?: number | undefined;
  personId?: number | undefined;
  studentId?: number | undefined;
  batch?: number | undefined;
  note?: number | undefined;
  collaboratorTypeId?: number | undefined;

  createdDate?: string | undefined;
  modifiedDate?: string | undefined;

  active?: boolean | undefined;

  attached1?: string | undefined;
  attached2?: string | undefined;
  attached3?: string | undefined;
  attached4?: string | undefined;

  institutionalEmail?: string | undefined;
  personName?: string | undefined;
  message?: string | undefined;
}
