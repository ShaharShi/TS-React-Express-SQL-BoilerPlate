import { RowDataPacket } from "mysql2";
import { db } from "./db";

// this is the type we use for db.query
type DbQueryResult<TableRecord> = (TableRecord & RowDataPacket)[];

export async function getUsers(): Promise<User[]> {
  const [users] = await db.query<DbQueryResult<User>>("SELECT * FROM table");
  // we need to cast the result to be without RowDataPacket
  return users as User;
}
