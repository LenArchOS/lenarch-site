/**
 * MIT License
 *
 * Copyright (c) 2020 Lena Voytek
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Document: baseRouter.ts
 *
 * Overview: This document acts as an Express router for base server endpoints
 */

import express from "express";

import {BaseController} from "../controllers/baseController";

export class BaseRouter
{
	public baseController: BaseController = new BaseController();

	/**
	 * Add routing locations for the website
	 * @param app The global Express app
	 */
	public baseRoute(app: express.Application): void
	{
		// get the homepage
		app.route('/').get(this.baseController.serveIndex);

		// get the os download page
		app.route('/download').get(this.baseController.serveDownloadOS);

		// get the package info homepage
		app.route('/packages').get(this.baseController.servePackageInfo);
	}
}