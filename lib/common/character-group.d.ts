import { Container } from '../class/container';
export declare class Element {
    method568: (id: string, container: Container) => string;
    parse(id: string, container: Container): string;
    method401: (id: string, container: Container) => string;
    parseFull(id: string, container: Container): string;
    isElement(id: string): boolean;
}
export declare class Speciality {
    method506(id: string): string;
    method402: (id: string, container: Container) => string;
    parse(id: string, container: Container): string;
    isSpeciality(id: string): boolean;
}
export declare class Race {
    parse(id: string, _container: Container): string;
    isRace(id: string): boolean;
}
export declare class Gender {
    method403: (id: string, container: Container) => string;
    parse(id: string, container: Container): string;
    isGender(id: string): boolean;
}
export declare class CharacterTag {
    isCharacterTag(id: string): boolean;
}
export declare class CharacterGroup {
    static Element: Element;
    static Speciality: Speciality;
    static Race: Race;
    static Gender: Gender;
    static CharacterTag: CharacterTag;
    static isType(str: string): string;
}
