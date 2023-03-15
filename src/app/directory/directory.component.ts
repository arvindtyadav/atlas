import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import { NodeService } from '../nodeservice';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})

export class DirectoryComponent implements OnInit{
  buildings!: TreeNode[];
  
  constructor(private nodeService: NodeService) { }

  ngOnInit() {
      //this.nodeService.getBuildings().then(files => this.buildings = files);
      
      // this.nodeService.getBuildings().subscribe(
      //   files => this.buildings = files
      // );

      const buildingsObserver = {
        next: (files: TreeNode[]) => this.buildings = files,
        error: (error: any) => console.error(error)
      };
      
      this.nodeService.getBuildings().subscribe(buildingsObserver);
  }
}
