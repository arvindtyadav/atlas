import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class NodeService {

    constructor(private http: HttpClient) { }

    // getBuildings() {
    // return this.http.get<any>('./assets/files.json')
    //   .toPromise()
    //   .then(res => <TreeNode[]>res.data);
    // }

    
    getBuildings(): Observable<TreeNode[]> {
      return this.http.get<any>('./assets/files.json')
        .pipe(
          map(res => <TreeNode[]>res.data)
        );
    }

    getBuildingNames(): Observable<string[]> {
      return this.http.get<any>('./assets/files.json')
        .pipe(
          map(res => {
            const buildingNames: string[] = [];
    
            for (let building of res.data) {
              if (building.children) {
                for (let child of building.children) {
                  buildingNames.push(child.label);
                }
              }
            }
    
            return buildingNames;
          })
        );
    }
   
}