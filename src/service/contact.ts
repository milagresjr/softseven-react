import { ContactType } from "../types";
import api from "./api";

export async function sendMail(data: ContactType) {
    const response = await api.post('contact',data);
    return response.data;
}