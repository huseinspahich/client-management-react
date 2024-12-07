import db from "../db.js";

export const getClients = async () => {
  try {
    const result = await db.query("SELECT * FROM clients_tb");
    return result.rows;
  } catch (error) {
    console.error("Error fetching clients:", error);
    throw error; 
};
}
export const addClient = async (clientData) => {
    try {
        const {name,job,email,rate,isactive} = clientData;
        await db.query("INSERT INTO clients_tb (name,job,email,rate,isactive) VALUES ($1, $2, $3, $4,$5) RETURNING *", [name,job,email,rate,isactive]);
        return rows[0];
    } catch (error) {
      console.error("Error fetching clients:", error);
      throw error; 
  };
};
export const updateClient = async (clientData) => {
    try {
        const {name,job,email,rate,isactive} = clientData;
        await db.query("UPDATE clients_tb SET name = $1, job = $2, email = $3, rate = $4, isactive = $5  WHERE id = $6", [name,job,email,rate,isactive,id]);
        return rows[0];
    } catch (error) {
      console.error("Error fetching clients:", error);
      throw error; 
  };
};
