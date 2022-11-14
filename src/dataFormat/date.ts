import { format } from "date-fns"

export class DateFormat {

    async data() {

        const date = format( new Date(), "dd/MM/yyyy");

        return date;

    }

}