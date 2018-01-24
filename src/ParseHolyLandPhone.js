/**
 * @author Mordi Sacks
 * @class ParseHolyLandPhone
 */
export default class ParseHolyLandPhone {

    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
        this.fromInternational();
    }

    static create(phoneNumber) {
        return new ParseHolyLandPhone(phoneNumber);
    }


    /**
     * Checks if phone number is a valid Israeli/Palestinian phone number
     *
     * @return boolean
     */
    isValid() {
        return this.phoneNumber.match(/^((0[23489][2356789]|0[57][102345689]\d|1(2(00|12)|599|70[05]|80[019]|90[012]|919))\d{6}|\*\d{4})$/) !== null;
    }

    /**
     * Checks if phone number is Israeli
     *
     * @return boolean
     */
    isIsraeli() {
        return this.phoneNumber.match(/^((0[23489][356789]|0[57][1023458]\d|1(2(00|12)|599|70[05]|80[019]|90[012]|919))\d{6}|\*\d{4})$/) !== null;
    }

    /**
     * Checks if phone number is Palestinian
     *
     * @return boolean
     */
    isPalestinian() {
        return this.phoneNumber.match(/^(0[23489]2|05[69]\d|)\d{6}$/) !== null;
    }

    /**
     * Checks if phone number is land line
     *
     * @return boolean
     */
    isLandLine() {
        return this.phoneNumber.match(/^0([23489][2356789]|7\d{2})\d{6}$/) !== null;
    }

    /**
     * Checks if phone number is mobile
     *
     * @return boolean
     */
    isMobile() {
        return this.phoneNumber.match(/^0[5][102345689]\d{7}$/) !== null;
    }

    /**
     * Checks if phone number is special (*1234)
     *
     * @return boolean
     */
    isSpecial() {
        return this.phoneNumber.match(/^\*\d{4}$/) !== null;
    }

    /**
     * Checks if phone number is business (1800, etc)
     *
     * @return boolean
     */
    isBusiness() {
        return this.phoneNumber.match(/^1(2(00|12)|599|70[05]|80[019]|90[012]|919)\d{6}$/) !== null;
    }

    /**
     * Checks if phone number is toll free (1800)
     *
     * @return boolean
     */
    isTollFree() {
        return this.phoneNumber.match(/^180[019]\d{6}$/) !== null;
    }

    /**
     * Checks if phone number is premium (1900)
     *
     * @return boolean
     */
    isPremium() {
        return this.phoneNumber.match(/^19(0[012]|19)\d{6}$/) !== null;
    }

    /**
     * Checks if phone number is Kosher (phone supports only calls)
     *
     * @return boolean
     */
    isKosher() {
        return this.phoneNumber.match(/^0([23489]80|5041|5271|5276|5484|5485|5331|5341|5832|5567)\d{5}$/) !== null;
    }

    /**
     * Checks if phone number is erotic (1919)
     *
     * @return boolean
     */
    isErotic() {
        return this.phoneNumber.match(/^1919\d{6}$/) !== null;
    }

    fromInternational() {
        this.phoneNumber = this.phoneNumber.replace(/^(972)(\d{8,9})$/, '0$2');
    }

    /**
     * Returns phone number transformed to international format
     * 021231234  > 97221231234
     * 0501231234 > 972501231234
     */
    getInternational() {
        return this.phoneNumber.replace(/^(0)(\d{8,9})$/, '972$2');
    }

    isNotValid(){
        return !this.isValid();
    }

    isNotIsraeli(){
        return !this.isIsraeli();
    }

    isNotPalestinian(){
        return !this.isPalestinian();
    }

    isNotLandLine(){
        return !this.isLandLine();
    }

    isNotMobile(){
        return !this.isMobile();
    }

    isNotBusiness(){
        return !this.isBusiness();
    }

    isNotTollFree(){
        return !this.isTollFree();
    }

    isNotPremium(){
        return !this.isPremium();
    }

    isNotKosher(){
        return !this.isKosher();
    }

    isNotErotic(){
        return !this.isErotic();
    }
}