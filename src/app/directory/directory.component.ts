import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import { NodeService } from '../nodeservice';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})

export class DirectoryComponent implements OnInit{
  files1!: TreeNode[];
  
  constructor(private nodeService: NodeService) { }

  ngOnInit() {
      this.nodeService.getFiles().then(files => this.files1 = files);
  }
}
