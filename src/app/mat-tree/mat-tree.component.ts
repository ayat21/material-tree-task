import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { SelectionModel } from "@angular/cdk/collections";
import { FlatTreeControl } from "@angular/cdk/tree";
import { Injectable, ViewChild } from "@angular/core";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener
} from "@angular/material/tree";
import { BehaviorSubject } from "rxjs";
import { MatMenuTrigger } from '@angular/material/menu';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  id?: string;
  selected?: boolean;
  indeterminate?: boolean;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
   {

     id:"2" ,name: 'Vegetables',
    children: [
      {
       id:"2_1" ,name: 'Green',
        children: [
          { id: '2_1_1',name: 'Broccoli',
          children: [
           {  id: '2_1_2',name: 'Green2',
           children: [
            { id: '2_1_2_1',name: 'Apple'}
          ]
          }
          ]},
          {id: '2_1_2',name: 'Brussels sprouts'},
        ]
      }, {
        id:"2_2", name: 'Orange',
        children: [
          { id: '2_2_1',name: 'Pumpkins'},
          { id: '2_2_2',name: 'Carrots'},
        ]
      },
      {
         id:"2_3", name: 'mango',
      }
    ]
  },
];


@Component({
  selector: 'app-mat-tree',
  templateUrl: './mat-tree.component.html',
  styleUrls: ['./mat-tree.component.css']
})
export class MatTreeComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
    Object.keys(this.dataSource.data).forEach(x => {
      this.setParent(this.dataSource.data[x], null);
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  hasChild = (_: string, node: FoodNode) =>
    !!node.children && node.children.length > 0;
  setParent(data, parent) {
    data.parent = parent;
    if (data.children) {
      data.children.forEach(x => {
        this.setParent(x, data);
      });
    }
  }



  @ViewChild('MatMenuTrigger', { static: false })
  contextMenu: MatMenuTrigger;

public clickedId:string[]=[];
public clickedId2:string;
  onContextMenu(event: MouseEvent, item: FoodNode) {
    event.preventDefault();
    this.clickedId.push(`${item.id} is ${item.name}`);
    this.clickedId2=this.clickedId.slice(-1)[0];
     

// let last:any = this.clickedId[this.clickedId.length-1];
 console.log(this.clickedId.slice(-1)[0]);

    // console.log(`${item.id} is ${item.name}`);
    //  console.log(item);
  }



}

