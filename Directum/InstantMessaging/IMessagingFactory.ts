/**
 * Объект IMessagingFactory предназначен для работы с системой мгновенных сообщений.
 */
export interface IMessagingFactory {
    /**
     * Свойство возвращает наименование статуса текущего пользователя.
     */
    readonly MyStatusDisplayName: string;
    /**
     * Свойство возвращает ID статуса текущего пользователя.
     */
    readonly MyStatusID: number;
    /**
     * Свойство возвращает наименование статуса пользователя, указанного в параметре UserName.
     */
    StatusDisplayName(userName: string): string;
    /**
     * Свойство возвращает ID статуса пользователя, указанного в параметре UserName.
     */
    StatusID(userName: string): number;
    /**
     * Метод отправляет через систему мгновенных сообщений текст сообщения Message пользователям, которые были указаны в параметре UserList.
     *
     * @param userList строка с именем пользователя или массив имен пользователей, которым нужно отправить сообщение
     * @param message текст сообщения
     */
    SendMessage(userList: string | Array<string>, message: string): void;
    /**
     * Метод создает конференцию в системе мгновенных сообщений для пользователей, которые были указаны в параметре UserList.
     *
     * @param userList строка с именем пользователя или массив имен пользователей, с которыми нужно провести конференцию.
     */
    StartConversation(userList: string | Array<string>): void;
}