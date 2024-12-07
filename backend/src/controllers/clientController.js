import * as clientServices from "../services/clientServices.js";

export const getClientsHandler = async(req, res) => {
   try{
    const clients = await clientServices.getClients();
    res.status(200).json(clients) 
} catch (error) {
    console.log(error);
}
};

export const addClientHandler = async(req, res) => {
    try{
        const clientData = req.body;
        const newClient = await clientServices.addClient(clientData);
        res.status(200).json(newClient) 
 } catch (error) {
     console.log(error);
 }
};

export const updateClientHandler = async(req, res) => {
    try{
        const id = req.params.id;
        const clientData = req.body;
        const updatedClient = await clientServices.updateClient(clientData,id);
        res.status(200).json(updatedClient) 
 } catch (error) {
     console.log(error);
 }
 };

export const deleteClientHandler = async(req, res) => {
    try{
        const id = req.params.id;
        const updatedClient = await clientServices.deleteClient(id);
        res.status(200).send() 
 } catch (error) {
     console.log(error);
 }
};

 export const searchClientsHandler = async (req, res) => {
    try {
        const searchTerm = req.query.search;  
        const clients = await clientServices.searchClients(searchTerm);
        res.status(200).json(clients); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error while searching clients." });
    }
}; 