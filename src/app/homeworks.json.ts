import { Homework } from './models/homework'

const fileBase = 'assets/homeworks/';
export const HOMEWORKS: Homework[] = [
    {'id': 1, 'relId': 2, 'subject': 'sspsor', 'file': fileBase + 'sspsor_1.html', date: new Date('2020/09/18'), reviewed: false, 'name': 'Introducción a los sistemas operativos de red', 'desc': 'Analizar las  características  generales  de  los  Sistemas Operativos de Red, e identificar los existentes sistemas operativos en la actualidad y documentar en una tabla comparativa.'},
    {'id': 2, 'relId': 3, 'subject': 'sspsor', 'file': fileBase + 'sspsor_2.html', date: new Date('2020/09/25'), reviewed: false, 'name': 'Sistemas operativos de red', 'desc': 'Investigue el funcionamiento de un SOR, destacando las características y su comportamiento y plasmarlo en un mapa semántico.'}
    
]