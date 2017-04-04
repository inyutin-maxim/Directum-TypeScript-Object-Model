import {IDataSet} from "../Data/IDataSet";
import {IRequisite} from "../Data/IRequisite";
/**
 * Внешний обработчик событий
 */
export interface IExternalHandler {
    /**
     * При срабатывании события метод вызывает одноименную реализацию метода в веб-доступе, и передает для обработки параметры IS-Builder.
     *
     * @param sender объект. Возможные значения:
     * •    IDataSet – набор данных, у которого сработало событие;
     * •    IRequisite – реквизит, у которого сработало событие;
     * @param context параметр для определения значения параметра Sender
     */
    OnExecute(sender: IDataSet | IRequisite, context: any): void;
}