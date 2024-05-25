### Avaluació del Codi de l'Exercici "General"

#### Repte 1 - Validació de Formularis (4p)

1. **Totes les validacions realitzades mitjançant JS (0,5p)**

   - **Complert**: Les validacions es fan exclusivament amb JavaScript, evitant l'ús de validacions HTML.
   - **Puntuació**: 0,5/0,5

2. **Ús d'almenys tres esdeveniments diferents (0,5p)**

   - **Complert**: S'han utilitzat els esdeveniments `input`, `focus` i `submit` per a les validacions.
   - **Puntuació**: 0,5/0,5

3. **Validacions correctes - 1a Part (1p)**

   - **Nom i Cognom**: Les validacions de nom i cognom es fan correctament per la llargada i si contenen números.
   - **Email**: La validació de l'email es fa correctament.
   - **Edat**: La validació de l'edat es fa correctament per verificar que és major d'edat.
   - **Missatge**: La validació del missatge comprova que té entre 10 i 200 caràcters. Es fa servir un `alert` en lloc d'un missatge dinàmic, es recomana millorar això.
   - **Puntuació**: 1/1

4. **Validacions - 2a Part (1p)**

   - **Gènere**: La validació del gènere no està implementada.
   - **Edat**: Es mostra un `alert` si l'usuari és menor d'edat.
   - **Missatge**: La validació del missatge es fa correctament.
   - **Puntuació**: 0,5/1

5. **Validacions - 3a Part (1p)**
   - **Producte**: La validació del producte no està implementada.
   - **Quantitat**: La validació de la quantitat no està implementada.
   - **Puntuació**: 0/1

**Comentaris**

- Es recomana millorar la validació dels camps del formulari, incloent l'ús de més esdeveniments per proporcionar feedback immediat a l'usuari.
- Les funcions de validació haurien de ser més robustes i complir amb els requisits especificats.
- Els missatges d'error haurien de ser dinàmics i mostrar-se al costat dels camps corresponents.

#### Repte 2 - Afegir Productes al Formulari (5p)

1. **Carregar els productes disponibles (2p)**

   - **Complert**: Els productes es carreguen correctament al formulari com opcions de la llista de selecció.
   - **Puntuació**: 2/2

2. **Afegir productes a la llista (2p)**

   - **Complert parcialment**: Els productes seleccionats s'afegeixen a una llista, però no es mostren la quantitat ni el preu total adequadament.
   - **Puntuació**: 1/2

3. **Finalització del formulari (1p)**
   - **No implementat**: No es valida el comportament lògic del formulari ni es mostra un missatge personalitzat a l'usuari.
   - **Puntuació**: 0/1

**Comentaris**

- És important assegurar-se que els productes seleccionats mostrin correctament la quantitat i el preu total.
- Implementar la finalització lògica del formulari amb missatges personalitzats per a l'usuari.

### Qualitat del Codi, Estructura, Llegibilitat i Comentaris (1p)

**Qualitat del codi**

- El codi presenta una bona estructura però alguns errors de lògica i sintaxi que necessiten ser corregits.

**Estructura i llegibilitat**

- El codi està relativament ben estructurat, però necessita més comentaris per millorar la comprensió.

**Comentaris**

- Incloure comentaris per explicar la funcionalitat del codi és essencial per millorar la seva mantenibilitat.
- Revisar i refactoritzar el codi per assegurar-se que és el més eficient i llegible possible.

**Puntuació**: 0,5/1
